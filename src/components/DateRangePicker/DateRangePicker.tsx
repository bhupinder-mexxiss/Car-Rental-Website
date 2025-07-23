interface DateRangePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    setStartDate: (date: Date | null) => void;
    setEndDate: (date: Date | null) => void;
}

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }: DateRangePickerProps) => {
    const formatDate = (date: Date | null) => {
        if (!date) return '';
        return date.toISOString().split('T')[0];
    };

    const calculateMinEndDate = () => {
        if (!startDate) return undefined;
        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + 1);
        return formatDate(nextDay);
    };

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value ? new Date(e.target.value) : null;
        setStartDate(newDate);

        // If end date is before new start date, reset it
        if (endDate && newDate && endDate <= newDate) {
            setEndDate(null);
        }
    };

    return (
        <div className="flex flex-col  md:items-center gap-4">
            <div className="w-full">
                <label htmlFor="start-date" className="form-label">
                    Pick-up Date
                </label>
                <input
                    type="date"
                    id="start-date"
                    className="form-input"
                    value={formatDate(startDate)}
                    onChange={handleStartDateChange}
                    min={formatDate(new Date())}
                />
            </div>
            <div className="w-full">
                <label htmlFor="end-date" className="form-label">
                    Drop-off Date
                </label>
                <input
                    type="date"
                    id="end-date"
                    className="form-input"
                    value={formatDate(endDate)}
                    onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                    min={calculateMinEndDate()}
                    disabled={!startDate}
                />
            </div>
        </div>
    );
};

export default DateRangePicker;