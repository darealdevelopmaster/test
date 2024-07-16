class Question {
  constructor(containerId, questionText, answers, correctAnswer, explanation, frontHeight, backHeight) {
    this.containerId = containerId;
    this.questionText = questionText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.explanation = explanation;
    this.frontHeight = frontHeight; // Height of front side
    this.backHeight = backHeight; // Height of back side
    this.hasSeenAnswer = false;

    this.render();
  }

  render() {
    const container = document.getElementById(this.containerId);
    container.classList.add("container");

    const flipper = document.createElement("div");
    flipper.classList.add("flipper");
    flipper.id = `${this.containerId}-flipper`;
    flipper.style.height = `${this.frontHeight}px`; // Set initial height of flipper

    const front = document.createElement("div");
    front.classList.add("front");

    const question = document.createElement("p");
    question.innerHTML = this.questionText;

    const choices = document.createElement("div");
    choices.classList.add("choices");

    this.answers.forEach((answer) => {
      const label = document.createElement("label");
      label.classList.add("radio-label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `${this.containerId}-answer`;
      input.value = answer;

      input.addEventListener("change", () => {
        const selectedLabel = choices.querySelector('.selected');
        if (selectedLabel) {
          selectedLabel.classList.remove('selected');
        }
        label.classList.add('selected');
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));

      choices.appendChild(label);
    });

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    const checkAnswerButton = document.createElement("button");
    checkAnswerButton.id = `${this.containerId}-checkAnswerButton`;
    checkAnswerButton.classList.add("round-button");
    checkAnswerButton.textContent = "Submit";

    checkAnswerButton.addEventListener("click", () => {
      const selectedAnswer = document.querySelector(
        `input[name="${this.containerId}-answer"]:checked`
      );
      if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
      }
      if (checkAnswerButton.classList.contains("AlreadyClicked")) {
        return;
      }
      const labels = document.querySelectorAll(
        `#${this.containerId} .radio-label`
      );
      labels.forEach((label) => {
        const input = label.querySelector("input");
        if (input.value === this.correctAnswer) {
          label.classList.add("correct");
          input.classList.add("correct");
        } else if (input.checked) {
          label.classList.add("incorrect");
          input.classList.add("incorrect");
        }
        checkAnswerButton.classList.add("AlreadyClicked");
        front.classList.add("solved");

        const radioButtons = choices.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radio) => {
          radio.disabled = true;
        });
      });

      this.showResult(selectedAnswer.value === this.correctAnswer);

      // Increase front height by 30px after clicking submit
      this.frontHeight += 30;
      flipper.style.height = `${this.frontHeight}px`;
    });

    const showExplanationButton = document.createElement("button");
    showExplanationButton.id = `${this.containerId}-showExplanationButton`;
    showExplanationButton.classList.add("round-button");
    showExplanationButton.textContent = "Explain";

    showExplanationButton.addEventListener("click", () => {
      const selectedAnswer = document.querySelector(
        `input[name="${this.containerId}-answer"]:checked`
      );
      if (selectedAnswer) {
        this.showExplanation();
      } else {
        this.showPopup();
      }
    });

    buttonGroup.appendChild(checkAnswerButton);
    buttonGroup.appendChild(showExplanationButton);

    front.appendChild(question);
    front.appendChild(choices);

    const result = document.createElement("div");
    result.id = `${this.containerId}-result`;
    result.classList.add("result");
    front.appendChild(result);
    front.appendChild(buttonGroup);

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.height = `${this.backHeight}px`; // Set height of back side

    const backExplanation = document.createElement("p");
    backExplanation.innerHTML = `Explanation: ${this.explanation}`;
    backExplanation.id = `${this.containerId}-backExplanation`;
    back.appendChild(backExplanation);

    const backButton = document.createElement("button");
    backButton.classList.add("back-button");
    backButton.textContent = "Back";

    backButton.addEventListener("click", () => {
      this.hideExplanation();
      flipper.style.height = `${this.frontHeight}px`; // Adjust height after going back
    });

    back.appendChild(backButton);

    flipper.appendChild(front);
    flipper.appendChild(back);
    container.appendChild(flipper);
  }

  showResult(isCorrect) {
    const result = document.getElementById(`${this.containerId}-result`);
    let message;
    if (isCorrect) {
      message = "<span style='font-size: 30px;'>🎉</span> <span style='font-size: 22px;'><b>Correct!</b></span>";
    } else {
      message = "<span style='font-size: 36px;'>❌</span> <span style='font-size: 24px; font-weight: bold;'>Wrong!</span>";
    }
    result.innerHTML = `<br>${message}<br><br>`;
  }

  showExplanation() {
    this.hasSeenAnswer = true;
    const flipper = document.getElementById(`${this.containerId}-flipper`);
    flipper.classList.add("flipped");
    const result = document.getElementById(`${this.containerId}-result`);
    result.textContent = "You have seen the answer.";
    result.style.color = "blue";
  }

  hideExplanation() {
    const flipper = document.getElementById(`${this.containerId}-flipper`);
    flipper.classList.remove("flipped");
  }

  showPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.id = `${this.containerId}-popup`;

    const popupText = document.createElement("p");
    popupText.textContent =
      "Revealing the explanation will show the correct answer. Do you want to proceed?";
    popup.appendChild(popupText);

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Yes";
    confirmButton.addEventListener("click", () => {
      const labels = document.querySelectorAll(
        `#${this.containerId} .radio-label`
      );
      labels.forEach((label) => {
        const input = label.querySelector("input");
        if (input.value === this.correctAnswer) {
          label.classList.add("correct");
          input.checked = true;
          input.classList.add("correct");
        }
      });

      const container = document.getElementById(this.containerId);
      const result = document.getElementById(`${this.containerId}-result`);
      if (result) {
        result.remove();
      }
      this.showResult(false);
      popup.classList.remove("show");
      this.showExplanation();
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "No";
    cancelButton.addEventListener("click", () => {
      popup.classList.remove("show");
    });

    popup.appendChild(confirmButton);
    popup.appendChild(cancelButton);

    document.body.appendChild(popup);
    popup.classList.add("show");
  }
}

export default Question;
