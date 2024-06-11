import React from "react";
import { Button } from "../Button";
import { Input } from "../InputField";

const PaymentSettings = () => {
  return (
    <>
      <h3 className="font-semibold">Change Your transaction Pin </h3>
      <form>
        <div className="flex flex-col sm:flex-row gap-x-12 mb-6">
          <Input label="Current pin" placeholder="Current pin" />
          <Input label="New pin" placeholder="New pin" />
          <Input label="Retype pin" placeholder="Retype pin" />
        </div>
        <Button px={"px-16"} py={"py-3 sm:py-[17px]"}>
          Change Pin
        </Button>
      </form>
    </>
  );
};

export default PaymentSettings;
