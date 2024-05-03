import React from "react";
import { Checkbox } from "../InputField";
import Button from "../Button";

const NotificationSettings = () => {
  return (
    <div>
      <h3 className="font-semibold mb-10">I want to recieve</h3>
      <form>
        <div className="flex flex-col gap-16 mb-6 max-w-[650px]">
          <Checkbox
            label={
              "Helpful resources and important updates related to being an Instructor on Decocde Analytical"
            }
          />

          <Checkbox
            label={
              "Notifications when students enrolled for my published courses"
            }
          />
          <Checkbox
            label={
              "Notifications when students opt out of my published courses"
            }
          />
          <Checkbox
            label={
              <div>
                <h3 className="font-semibold">
                  Don’t send me promotional emails
                </h3>
                <p>
                  Note that when this box is checked, you will still receive
                  important emails such as, purchase receipts.
                </p>
              </div>
            }
          />
        </div>
        <Button px={"px-16"} py={"py-3 sm:py-[17px]"}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default NotificationSettings;
