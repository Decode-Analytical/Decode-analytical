import React from "react";
import { Input } from "../InputField";
import Button from "../Button";

const AccountSetting = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 mb-10">
          <Input label="First Name" placeholder="Gabrielle Torrez" />
          <Input
            label="Email Address"
            placeholder="Gabrielletorrez@gmail.com"
          />
          <Input label="Language" placeholder="English (British)" />
          <Input label="Country" placeholder="Nigeria" />
        </div>
        <Button px={"px-16"}>Save</Button>
      </form>
      <div className="mt-20">
        <h3 className="font-semibold">Password</h3>
        <form>
          <div className="flex flex-col sm:flex-row gap-x-12 mb-10 gap-y-0">
            <Input
              label="Current password"
              notImportant
              placeholder="Current password"
            />
            <Input
              label="New password"
              notImportant
              placeholder="New password"
            />
            <Input
              label="Retype password"
              notImportant
              placeholder="Retype password"
            />
          </div>
          <Button px={"px-16"}>Change password</Button>
        </form>
      </div>
      <div className="mt-20">
        <h3 className="font-semibold mb-3">Two-Factor Authentication</h3>
        <form>
          <p className="flex gap-12 mb-7 max-w-[700px]">
            Two-Factor Authentication adds an additional layer of security to
            your Decode account. Each time you log in to your account, you will
            be asked to enter a unique code that is only available on your
            mobile phone. This extra protection ensures that you are the only
            one who will have access to your Decode account and courses.
          </p>
          <Button px={"px-16"}>Enable Two-Factor Authentication?</Button>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
