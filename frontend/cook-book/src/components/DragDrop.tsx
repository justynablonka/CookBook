import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
interface DragDropProps {
    onUpload: (file: File) => void
}
function DragDrop(props: DragDropProps) {

  return (
    <FileUploader handleChange={props.onUpload} name="file" types={fileTypes} />
  );
}

export default DragDrop;