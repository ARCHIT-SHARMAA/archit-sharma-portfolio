import React, { MouseEventHandler, HTMLAttributes } from "react";

type CalendarNavProps = {
  onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
  onNextClick?: MouseEventHandler<HTMLButtonElement>;
  previousMonth?: Date;
  nextMonth?: Date;
} & HTMLAttributes<HTMLDivElement>;

const CalendarNav: React.FC<CalendarNavProps> = ({
  onPreviousClick,
  onNextClick,
  previousMonth,
  nextMonth,
  ...props
}) => {
  return (
    <div {...props} className="flex justify-between items-center">
      <button
        onClick={onPreviousClick}
        disabled={!previousMonth}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        {previousMonth
          ? previousMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })
          : "Previous"}
      </button>

      <button
        onClick={onNextClick}
        disabled={!nextMonth}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        {nextMonth
          ? nextMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })
          : "Next"}
      </button>
    </div>
  );
};

export default CalendarNav;
