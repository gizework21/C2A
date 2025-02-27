import { C2AButton } from "@/components/buttons";
import { C2ADialog } from "@/components/dialog";
import { FileUpload } from "@/components/input";
import { CircularLoading } from "@/components/loading";
import { AddProductForm, VendorHeader } from "@/components/vendor";
import { DialogClose } from "@radix-ui/react-dialog";
import { CircleHelp, Sheet } from "lucide-react";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <VendorHeader title="Add Product" />

      <div className="flex items-center justify-end">
        <C2ADialog
          title={"Bulk upload"}
          headerText="Upload file"
          variant="default"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <FileUpload />
          </div>

          <div className="flex justify-between items-center px-4 text-xs">
            <div className="flex gap-2 items-center">
              <Sheet size={32} />
              <p>
                Download This Attached File and Fill the table according to the
                instraction
              </p>
            </div>

            <C2AButton variant="outline" size="sm">
              Download
            </C2AButton>
          </div>

          <div className="flex justify-between items-center px-4 pb-4 mt-8">
            <div className="flex gap-2">
              <CircleHelp size={24} />
              <p className="underline">Help center</p>
            </div>

            <div className="flex gap-4 ">
              <DialogClose>
                <C2AButton variant="outline">Cancel</C2AButton>
              </DialogClose>

              <C2AButton>Upload</C2AButton>
            </div>
          </div>
        </C2ADialog>
      </div>
      <Suspense fallback={<CircularLoading />}>
        <AddProductForm />
      </Suspense>
    </div>
  );
};

export default Page;
