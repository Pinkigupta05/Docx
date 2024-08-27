// import React from 'react';
import React,{useRef} from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, ipsum tempore suscipit tenetur veniam!",
      filesize: ".1em",
      closeOrDownload: "true",
      tagDetails: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, ipsum tempore suscipit tenetur veniam!",
        filesize: ".1em",
        closeOrDownload: "true",
        tagDetails: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi, ipsum tempore suscipit tenetur veniam!",
        filesize: ".1em",
        closeOrDownload: "true",
        tagDetails: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
      },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex gap-5 flex-wrap ">
      {data.map((item, index) => (
        // Pass the data item as a prop to Card
        <Card key={index} data={item}  reference={ref}/>
      ))}
      {/* //desc, filesize , closeOrDownload , tagdetails */}
    </div>
  );
}

export default Foreground;
