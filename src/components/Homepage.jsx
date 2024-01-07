import React from "react";
import portfolio from "../assets/1.jpg";
function Homepage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              error qui repellendus eius. Exercitationem quidem nostrum ut id
              nam consequatur tempora, ipsam quibusdam, deserunt velit, rem
              minus maiores suscipit incidunt quos sed expedita error laborum
              neque veritatis excepturi alias laboriosam! Hic quibusdam sed
              earum sequi tempora alias libero explicabo quisquam culpa beatae
              ratione quos facilis atque assumenda ducimus sunt, quia excepturi
              eaque quam. Non dolorem expedita cum, adipisci libero corrupti
              tempora ipsam dicta molestiae! Iure aliquam, quasi animi voluptas
              debitis totam rerum excepturi minus est ipsa quas, fugiat
              molestias corrupti veritatis tempora. Totam, perspiciatis? Optio
              ut iusto asperiores minus eos earum quaerat reiciendis distinctio
              odio, temporibus amet in unde libero soluta odit veniam quisquam
              expedita vitae ducimus. Iure eligendi deleniti omnis! Corrupti,
              vel debitis veniam atque magnam odio mollitia excepturi facilis
              ratione perspiciatis, nam necessitatibus sit? Ad temporibus
              aliquid doloribus molestiae distinctio voluptatum quia, officia et
              tempora nemo fugit doloremque facilis! Libero mollitia temporibus
              sapiente culpa deserunt vel inventore, quidem sunt minus adipisci
              doloremque dolorem tenetur. Earum nobis aliquam voluptas impedit
              vel vero eveniet voluptatibus qui ipsa possimus voluptatem,
              veritatis aliquid placeat molestiae eius rerum, ipsam sint
              delectus consequuntur officiis minus itaque. Autem tempora
              corrupti aperiam rerum, nihil minus quaerat?
            </p>
          </div>
          <div className="col image">
            <img src={portfolio} alt="portfolio image" className="home-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
