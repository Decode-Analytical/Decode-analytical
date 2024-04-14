import React from "react";
import Button from "../Button";
import { Input } from "../InputField";

const PaymentSettings = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold -mb-4">Create your transaction Pin</h3>
        <form className="flex flex-col lg:flex-row gap-x-10 gap-y-5 mb-10 w-full">
          <div className="flex flex-col sm:flex-row gap-x-12 w-full lg:w-[74%] mb-3">
            <Input title="New pin" placeholder="e.g. 1234" notImportant />
            <Input title="Confirm pin" placeholder="e.g. 1234" notImportant />
          </div>
          <span className="flex items-end">
            <Button py={"py-3 sm:py-[17px]"} className={"mb-3 w-[250px]"}>
              Create my Pin
            </Button>
          </span>
        </form>
      </div>
      <div className="mt-20">
        <h3 className="font-semibold -mb-4">Change Your transaction Pin </h3>
        <form>
          <div className="flex flex-col sm:flex-row gap-x-12 mb-8">
            <Input title="Current pin" notImportant />
            <Input title="New pin" notImportant />
            <Input title="Retype pin" notImportant />
          </div>
          <Button px={"px-16"} py={"py-3 sm:py-[17px]"}>
            Change Pin
          </Button>
        </form>
      </div>
    </>
  );
};

export default PaymentSettings;
