import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { motion } from 'framer-motion';
import {IoClose} from 'react-icons/io5';

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints= {reference} className="relative rounded-[20px] w-60 h-72 bg-zinc-600/90 p-5 text-white overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5">{data.desc}</p>
      <div className="footer absolute bg-sky-500 bottom-0 w-full left-0">
        <div className="px-1 flex items-center justify-between">
          <h1>{data.filesize}</h1>
          <span className="bg-sky-700 p-1 rounded-full">
          {
            data.closeOrDownload  ? <IoClose/>: 
            <LuDownload size=".8em" />}
          </span>
        </div>
        {data.tagDetails.isopen && (
  <div
    className={`tag w-full h-5 py-4 ${
      data.tagDetails.tagColor === 'blue' ? 'bg-blue-600' : 'bg-slate-600'
    } flex items-center justify-center`}
  >
    <h3 className="text-md">{data.tagDetails.tagTitle}</h3>
  </div>
)}

      </div>
    </motion.div>
  )   ;
}

export default Card;
