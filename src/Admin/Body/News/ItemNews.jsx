function ItemFoodNews({new_item}) {
  return (
    <>
      <div className="abc-hero">
        <div className="abc-container2">
          <h4 className="abc-text">{new_item.name}</h4>
          <span className="newItem-text abc-text01">
            <span>
              <span>{new_item.content}</span>
            </span>
            <br />
          </span>
        </div>
        <img alt="image" src={new_item.image} className="abc-image" />
        <div className="abc-container3">
          <p className="abc-text10">{new_item.description_1}</p>
          <p className="abc-text10">{new_item.description_2}</p>
        </div>
        <img alt="image" src={new_item.image_1} className="abc-image" />
        <div className="abc-container3">
          <p className="abc-text10">{new_item.description_3}</p>
          <p className="abc-text10">{new_item.description_4}</p>
          <p className="abc-text10">{new_item.description_5}</p>
          <p className="abc-text10">{new_item.description_6}</p>
        </div>
      </div>
    </>
  );
}

export default ItemFoodNews;
