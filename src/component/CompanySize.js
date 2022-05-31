const CompanySize = [
  {
    id: 1,
    size: "1-20",
  },
  {
    id: 2,
    size: "21-50",
  },
  {
    id: 3,
    size: "51-200",
  },
  {
    id: 4,
    size: "201-500",
  },
  {
    id: 5,
    size: "500+",
  },
];

const Companydetail = () => {
  return (
    <>
      <label className="form-label mt-2">Company Size</label>
      <div className="button-option">
        {CompanySize.map((digit) => (
          <button className="btn btn-sm btn-small bg-light" type="button">
            {digit.size}
          </button>
        ))}
      </div>
    </>
  );
};

export default Companydetail;
