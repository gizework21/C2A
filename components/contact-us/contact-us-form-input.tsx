interface ContactUsFormInputProps {
  label: string;
  placeholder: string;
  htmlFor: string;
}

export const ContactUsFormInput = ({
  label,
  placeholder,
  htmlFor,
}: ContactUsFormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="poppins text-[16px]">
        {label}
      </label>
      <input
        type="text"
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        className="outline-none rounded-md border px-4 py-1 placeholder:text-kwhite-placeholderText bg-kwhite-inputBg"
      />
    </div>
  );
};
