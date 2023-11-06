export default function BlogBox({ category, content, number }) {
  return (
    <div className="flex flex-col border-t border-dark-blue max-w-[520px]">
      <p className="pt-[56px]">{category.toUpperCase()}</p>
      <p className=" flex-1 font-[600] md:text-[32px] pt-[24px]">{content}</p>
      <p className="font-spaceGrotesk font-[700] text-4xl md:text-[50px] pt-[80px]">
        {number}
      </p>
    </div>
  )
}
