import { DatePicker, ICalendarProps, PrimaryButton } from "@fluentui/react";
import { ISelectDateAndTimeProps } from "./SelectDateAndTime.types";
import { useCallback, useEffect, useState } from "react";

export function SelectDateAndTime(props: ISelectDateAndTimeProps): JSX.Element {
  const { restrictDates } = props;

  const currDate = new Date();

  const [date, setDate] = useState<string>(currDate.toString());
  const [flag, setFlag] = useState<boolean>(false);

  const restrictDatePicker: Date[] = restrictDates.map((restrictDate) => {
    return new Date(restrictDate);
  });

  const calendarProps: ICalendarProps = {
    restrictedDates: restrictDatePicker,
  };

  const selectedDate = useCallback((selectDate: Date | null | undefined) => {
    if (selectDate) {
      setDate(selectDate.toDateString());
    }
  }, []);

  useEffect(() => {
    if (date === "Tue Feb 13 2024") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [date]);

  function renderButton() {
    if (flag) {
      return <PrimaryButton title="Submit" />;
    }
  }

  return (
    <>
      <DatePicker
        placeholder="Select a Date"
        minDate={new Date(currDate.setDate(currDate.getDate() + 1))}
        maxDate={new Date(currDate.setDate(currDate.getDate() + 6))}
        isMonthPickerVisible={true}
        calendarProps={calendarProps}
        onSelectDate={selectedDate}
      />

      <div>
        <h1> The Date selected is {date}</h1>
      </div>
      <div>{renderButton()}</div>
    </>
  );
}
