export default function SectionHeading({ title, children }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end md:gap-10">
      <h2 className="max-w-2xl text-display-lg">{title}</h2>
      {children && <p className="max-w-md leading-7 font-medium text-ink/80">{children}</p>}
    </div>
  );
}
