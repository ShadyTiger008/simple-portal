import React from "react";

const Content = ({ selectedContent }) => {
  const contentMap = {
    home: (
      <div>
        <h2 className="font-bold text-4xl p-3">Home</h2>
        <div className="text-semibold text-xl">
          <p>Welcome to the Homepage</p>
          <p>This is the homepage content.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            tristique velit. Duis interdum metus ut mauris vestibulum, in
            consectetur est facilisis. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Nam viverra mauris
            vel lorem pharetra, non mattis sapien bibendum. Sed et dapibus
            lectus, id maximus libero. Maecenas mollis volutpat odio vitae
            venenatis.
          </p>
        </div>
      </div>
    ),
    contact: (
      <div>
        <h2 className="font-bold text-4xl p-3">Contact</h2>
        <div className="text-semibold text-xl">
          <p>Name: Soumyajeet Chatterjee</p>
          <p>Phone No: 9674764684</p>
          <p>E-mail: Chatterjeesoumyajeet@gmail.com</p>
          <p>Address: 15b kalachand patitundi lane paikpara kolkata-700002</p>
        </div>
      </div>
    ),
    information: (
      <div>
        <h2 className="font-bold text-4xl p-3">Information</h2>
        <div className="font-semi-bold text-lg">
          <p className="text-xl underline">Assignment Given:</p>
          <p> 1. Create an HTML page on which the</p>
          <p>
            left side should be home, contact, information, and guide. 2. Now
            after creating the left panel when I click on any of these
            components (home, contact...etc) content should be shown on the
            remaining screen example you created left panel when I click o
            contact contact information should be shown when I click on guide
            than some other information should be shown like that.
          </p>
          <p>
            3. After doing this kindly upload it on google drive and shared a
            link.
          </p>
        </div>
      </div>
    ),
    guide: (
      <div>
        <h2 className="font-bold text-4xl p-3 underline">Guide</h2>
        <div className="text-semibold text-xl">
          <p>Guide content is shown here.</p>
          <p>Here are some tips to help you make the most out of this guide:</p>
          <ul className="list-disc ml-8">
            <li>Read each section carefully and take notes.</li>
            <li>Experiment with the code and try different variations.</li>
            <li>
              Customize the content and styles to suit your project's needs.
            </li>
            <li>
              Use the left panel navigation to switch between different
              sections.
            </li>
            <li>Feel free to explore and have fun!</li>
          </ul>
          <p>
            If you have any questions or need further assistance, don't hesitate
            to contact the developer or refer to the provided documentation.
          </p>
        </div>
      </div>
    ),
  };

  return <div className="w-4/5 p-10">{contentMap[selectedContent]}</div>;
};

export default Content;
