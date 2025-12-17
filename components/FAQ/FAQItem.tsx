const FAQItem = ({ faqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const open = activeFaq === id;

  return (
    <div className="rounded-[10px] bg-white/5 border border-white/10">
      <button
        onClick={() => handleFaqToggle(id)}
        className="w-full flex items-center justify-between px-[22px] py-[16px]
                   font-sans text-[15px] text-white text-left"
      >
        {quest}
        <span className="text-white/70">{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="px-[22px] pb-[18px] font-sans text-[14px] leading-[22px] text-white/60 max-w-[520px]">
          {ans}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
