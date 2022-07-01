import React from "react";
import Image from "../../atoms/Image/Image";
import Content from "../../molecules/Content/Content";
import "./Sections.scss";

export default function Section({ url, heading, id, onClick }) {
    
    return (
        <section className="container">
          
          <Image source={url} alt={heading} className="icon" />
                    <Content
                        // className={archiveCSS}
                        heading={heading}
                        id={id}
                        onClick={onClick}
                     
                    />
                
        </section>
    );
}