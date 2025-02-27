"use client";
import { cn } from "@/lib";
import { useState } from "react";
import { C2AButton } from "../buttons";
import { Input } from "../ui";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onChange?: (e: File | null) => void;
}

export const FileUpload = ({ onChange }: FileUploadProps) => {
  const [file, setFile] = useState<string>();
  const [fileEnter, setFileEnter] = useState(false);
  return (
    <div className="px-4 w-full mx-auto">
      {!file ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={(e) => {
            setFileEnter(false);
          }}
          onDragEnd={(e) => {
            e.preventDefault();
            setFileEnter(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setFileEnter(false);
            const files = Array.from(e.dataTransfer.items);
            if (e.dataTransfer.items.length) {
              files.forEach((item, i) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    const blobUrl = URL.createObjectURL(file);
                    setFile(blobUrl);
                  }
                  console.log(`items file[${i}].name = ${file?.name}`);
                }
              });
            } else {
              files.forEach((file, i) => {
                console.log(`… file[${i}].name = ${file}`);
              });
            }
          }}
          className={cn(
            "mx-auto  bg-white flex flex-col w-full rounded-[16px] h-72 border-dashed items-center justify-center border-2",
            fileEnter && "border-4"
          )}
        >
          <div className="flex flex-col items-center justify-center">
            <Upload className="size-[80px]" />

            <label
              htmlFor="file"
              className="h-full flex flex-col justify-center text-center"
            >
              Drag and Drop file here
            </label>

            <p>or</p>

            <Input
              placeholder="Browse file"
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files[0]) {
                  const blobUrl = URL.createObjectURL(files[0]);
                  setFile(blobUrl);
                }

                if (files && onChange) {
                  onChange(files[0]);
                }
              }}
            />

            <label
              htmlFor="file"
              className="px-4 py-2 border text-kaccent rounded-full mt-4 cursor-pointer"
            >
              Browse files
            </label>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <object
            className="rounded-md w-full max-w-xs h-72"
            data={file}
            type="image/png"
          />
          <div className="flex gap-4 my-6">
            <C2AButton onClick={() => setFile("")} variant="outline">
              Reset
            </C2AButton>
          </div>
        </div>
      )}
    </div>
  );
};
