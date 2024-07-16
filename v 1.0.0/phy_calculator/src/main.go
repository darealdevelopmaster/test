package main

import (
	"encoding/json"
	"net/http"
)

type CalculationRequest struct {
	Rule     string             `json:"rule"`
	SolveFor string             `json:"solveFor"`
	Values   map[string]float64 `json:"values"`
}

type CalculationResponse struct {
	Result float64 `json:"result,omitempty"`
	Error  string  `json:"error,omitempty"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func calculate(w http.ResponseWriter, r *http.Request) {
	// Enable CORS
	enableCors(&w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var req CalculationRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var result float64
	switch req.SolveFor {
	case "force":
		result = req.Values["mass"] * req.Values["acceleration"]
	case "mass":
		result = req.Values["force"] / req.Values["acceleration"]
	case "acceleration":
		result = req.Values["force"] / req.Values["mass"]
	default:
		json.NewEncoder(w).Encode(CalculationResponse{Error: "Invalid variable to solve for."})
		return
	}

	json.NewEncoder(w).Encode(CalculationResponse{Result: result})
}

func main() {
	// Serve static files (HTML, CSS, JS)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)

	http.HandleFunc("/calculate", calculate)
	http.ListenAndServe(":5500", nil)
}
