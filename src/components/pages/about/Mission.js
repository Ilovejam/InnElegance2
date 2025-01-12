const Mission = () => {
  const missionData = [
    {
      icon: "flaticon-garden",
      title: "Modern Villalar",
      description: "Modern ve şık tasarımlar, konforu bir üst seviyeye taşıyor.",
    },
    {
      icon: "flaticon-secure-payment",
      title: "Güvenli Ödeme",
      description: "Tüm ödemeleriniz güvenli bir şekilde işlenir.",
    },
  ];

  return (
    <>
      {missionData.map((item, index) => (
        <div className="col-sm-6" key={index}>
          <div className="why-chose-list style3">
            <div className="list-one mb30">
              <span className={`list-icon flex-shrink-0 ${item.icon} mb20`} />
              <div className="list-content flex-grow-1">
                <h6 className="mb-1">{item.title}</h6>
                <p className="text mb-0 fz14">
                  {item.description}
                  <br className="d-none d-sm-block" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mission;
