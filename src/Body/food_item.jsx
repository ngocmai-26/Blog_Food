function Food_item({ food_item }) {
  return (
    <>
      <div className="abc-hero">
        <div className="abc-container2">
          <h4 className="abc-text">
            {food_item.name} - {food_item.conscious}
          </h4>
          <span className="abc-text01">
            <span>
              <span>{food_item.description}</span>
              <span></span>
            </span>
            <br />
          </span>
        </div>
        <img alt="image" src={food_item.image} className="abc-image" />
        <div className="abc-container3">
          <p className="abc-text10">{food_item.description_1}</p>
          <p className="abc-text10">{food_item.description_2}</p>
        </div>
        <img alt="image" src={food_item.image_1} className="abc-image" />
        <div className="abc-container3">
          <p className="abc-text10">{food_item.description_3}</p>
          <p className="abc-text10">{food_item.description_4}</p>
          <p className="abc-text10">{food_item.description_5}</p>
        </div>
      </div>
    </>
  );
}

export default Food_item;
