import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AnnouncementBar() {
  return (
    <aside
      className="
        flex items-center justify-between 
        bg-black text-white 
        px-2 sm:px-4 md:px-8 lg:px-12 
        py-1 sm:py-2
      "
      aria-label="Announcement Bar"
    >
      {/* Centered Text + CTA */}
      <div
        className="
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-1 sm:gap-2 md:gap-4 
          text-center mx-auto
        "
      >
        <p
          className="
            text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 
            leading-snug sm:leading-normal
          "
        >
          Summer Sale For All Swim Suits And Free Express Delivery –{" "}
          <strong>50% OFF!</strong>
        </p>
        <a
          href="/sale"
          className="
            font-bold 
            text-[10px] sm:text-xs md:text-sm lg:text-base 
            underline underline-offset-2 hover:text-gray-300
          "
        >
          Shop Now
        </a>
      </div>

      {/* Right Section: Language Selector */}
      <div className="ml-auto">
        <Select defaultValue="en">
          <SelectTrigger
            className="
              w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px]
              border-0 shadow-none bg-transparent 
              py-0.5 sm:py-1 px-1 sm:px-2 
              flex gap-x-1 justify-center 
              font-bold 
              text-[10px] sm:text-xs md:text-sm lg:text-base 
              text-white
              focus:outline-none focus:ring-0 focus:ring-offset-0
              data-[state=open]:outline-none data-[state=open]:ring-0 data-[state=open]:border-0
              focus-visible:ring-0 focus-visible:ring-offset-0
            "
          >
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ur">Urdu</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="zh">Chinese</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
            <SelectItem value="tr">Turkish</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}

export default AnnouncementBar;
