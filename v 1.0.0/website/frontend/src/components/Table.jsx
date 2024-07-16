import "../styles/components/table.css";

/* 
  {
    "#": 1,
    عنوان: "هاري بوتر و حجر الفلاسفة",
    صف: "الصف الثاني الثانوي",
    سعر: "30.00 $",
    كمية: <input type="number" />,
  },
*/

const Table = ({ data, totalAmount, setTotalAmount }) => {
  const keys = Object.keys(data[0]);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => {
              return <th key={index}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* Loop over the whole array to make them columns */}
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {keys.map((key, index) => {
                  if (key == "العدد") {
                    return (
                      <td key={index}>
                        <input
                          className="min-w-[60px]"
                          type="number"
                          defaultValue={0}
                          min={0}
                          max={100}
                          onChange={(e) => {
                            setTotalAmount({
                              ...totalAmount,
                              [e.target.id]: {
                                price:
                                  (parseInt(e.target.value)
                                    ? parseInt(e.target.value)
                                    : 0) * row["السعر"],
                                quantity: parseInt(e.target?.value),
                                itemPrice: parseInt(row["السعر"]),
                              },
                            });
                          }}
                        />
                      </td>
                    );
                  }
                  return <td key={index}>{row[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
