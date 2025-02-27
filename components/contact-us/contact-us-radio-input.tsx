interface ContactFormRadionInputProps {
  label: string;
}

export const ContactUsRadioInput = ({ label }: ContactFormRadionInputProps) => {
  return (
    <div className="flex gap-4">
      <input type="radio" id="generalInquiry" />
      <label htmlFor="generalInquiry" className="poppins text-[16px] ">
        {label}
      </label>
    </div>
  );
};
