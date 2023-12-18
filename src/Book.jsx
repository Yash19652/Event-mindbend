import React from "react";
import "./Book.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
function Book() {
  return (
    <>
      
      <div className="customizedContainer">
        <input type="checkbox" id="checkbox-cover" />
        <input type="checkbox" id="checkbox-page1" />
        <input type="checkbox" id="checkbox-page2" />
        <input type="checkbox" id="checkbox-page3" />
        <input type="checkbox" id="checkbox-page4" />
        <div className="book">
          <div className="cover">
            <label htmlFor="checkbox-cover">
            <div className="TitlePage">EVENT NAME RULEBOOK</div>
            </label>
          </div>
          <div className="page" id="page1">
            <div className="front-page">
              <h2>Rules</h2>
              <p>
                RULES OF EVENT........
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                magni laudantium beatae quia. Recusandae, fuga quas consectetur
                perferendis aperiam esse velit veniam ducimus? Quisquam
                consequatur perferendis quidem quia, recusandae ab!
              </p>
              <label className="next" htmlFor="checkbox-page1">
              <FontAwesomeIcon icon={faChevronRight} />
              </label>
            </div>
            <div className="back-page">
              <h2>Details</h2>
              <label className="prev" htmlFor="checkbox-page1">
              <FontAwesomeIcon icon={faChevronLeft} />
              </label>
            </div>
          </div>
          <div className="page" id="page2">
            <div className="front-page">
              <p>
                DETAILS OF EVENT.......Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                magni laudantium beatae quia. Recusandae, fuga quas consectetur
                perferendis aperiam esse velit veniam ducimus? Quisquam
                consequatur perferendis quidem quia, recusandae ab!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolore dicta amet in neque animi blanditiis corrupti ipsam maiores, harum dignissimos beatae odit ratione odio et eius quos eveniet aut iure laborum necessitatibus. Facere reprehenderit saepe nostrum dicta quas aspernatur 
              </p>
              <label className="next" htmlFor="checkbox-page2">
              <FontAwesomeIcon icon={faChevronRight} />
              </label>
            </div>
            <div className="back-page">
              <h2>FAQS</h2>
              <label className="prev" htmlFor="checkbox-page2">
              <FontAwesomeIcon icon={faChevronLeft} />
              </label>
            </div>
          </div>

          <div className="page" id="page3">
            <div className="front-page">
              <p>
                FAQS........Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                magni laudantium beatae quia. Recusandae, fuga quas consectetur
                perferendis aperiam esse velit veniam ducimus? Quisquam
                consequatur perferendis quidem quia, recusandae ab!
              </p>
              <label className="next" htmlFor="checkbox-page3">
              <FontAwesomeIcon icon={faChevronRight} />
              </label>
            </div>
            <div className="back-page">
              <h2>Contacts</h2>
              <label className="prev" htmlFor="checkbox-page3">
              <FontAwesomeIcon icon={faChevronLeft} />
              </label>
            </div>
          </div>

          <div className="page" id="page4">
            <div className="front-page">
              <p>
                CONTACTS.........Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                magni laudantium beatae quia. Recusandae, fuga quas consectetur
                perferendis aperiam esse velit veniam ducimus? Quisquam
                consequatur perferendis quidem quia, recusandae ab!
              </p>
            </div>
          </div>
          <div className="back-cover"></div>
        </div>
      </div>

      
    </>
  );
}

export default Book;
