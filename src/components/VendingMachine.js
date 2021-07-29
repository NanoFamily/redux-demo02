import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear } from "../stores/gif";

function VendingMachine() {
  const imageUrl = useSelector(state => state.gif.url);
  const loading = useSelector(state => state.gif.loading);
  const error = useSelector(state => state.gif.error);

  const dispatch = useDispatch();

  const imgBox = {
    width: "520px",
    height: "520px",
    objectFit: "contain",
    marginRight: "3%",
    border: "2px solid #ccc",
    background: "white",
    margin: "auto"
  };
  
  const img = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    margin: "auto",
    textAlign: "center"
  }

  return (
    <div>
      <div className="columns is-centered">
        <h1 className="title">〇〇GIFガチャ</h1>
      </div>
      <div className="card-content is-centered" style={imgBox}>
        <figure class="columns is-centered" style={img}>
            <Gif {...{ imageUrl, loading, error }}/>
        </figure>
      </div>
      <hr/>
      <div className="columns is-centered">
        <div className="buttons">
          <button
            className="button is-primary"
            onClick={() => dispatch(fetchAsync())}
          >Play</button>
          <button
            className="button"
            onClick={() => dispatch(clear())}
          >Clear</button>
        </div>
      </div>
    </div>
  );
}

function Gif({ imageUrl, loading, error }) {
  if (error) {
    return <p>Error!!</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!imageUrl) {
    return <p>Welcome!</p>;
  }

  return (
    <figure>
      <img src={imageUrl} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  );
}

export default VendingMachine;
