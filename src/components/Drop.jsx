import React, {useEffect, useState, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import { useTranslation } from "react-i18next";
import 'bootswatch/dist/minty/bootstrap.min.css'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function Drop({required, name, setFiles, files}) {
  const { t, i18n } = useTranslation();
  const {open, getRootProps, getInputProps} = useDropzone({
    maxFiles:5,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop: (incomingFiles) => { 
      setFiles(prevFiles => { 
        const updated = [ 
          ...prevFiles, 
          ...incomingFiles.map(file => 
            Object.assign(file, { preview: URL.createObjectURL(file) }) 
          )]; 
    return updated; })}
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>{t("dropFiles")}</p>
        <em>({t("max5files")})</em>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default Drop; 