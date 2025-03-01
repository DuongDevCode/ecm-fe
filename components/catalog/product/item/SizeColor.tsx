import { ITypeProdSchema } from "./type/schema";
export default function SizeColorProdItem({
  props,
}: {
  props: {
    classBtn: string;
    type: ITypeProdSchema;
    setType: (data: ITypeProdSchema) => void;
  };
}) {
  const { classBtn, type, setType } = props;
  const sizeDefault: string[] = ["M", "L", "XL"];
  const colorDefault: string[] = ['pink', 'white']
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2">
        {sizeDefault?.map((item, idx) => (
          <input
            key={idx}
            className={`${classBtn} ${
              item == type.size && "bg-[#006e52] text-white"
            }`}
            type="button"
            value={item}
            title={item}
            onClick={(e: any) => setType({ ...type, size: e.target.value })}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-x-2">
        {colorDefault?.map((item, idx) => (
          <input
            key={idx}
            className={`${classBtn} ${
              item == type.color && "bg-[#006e52] text-white"
            }`}
            type="button"
            value={item}
            title={item}
            onClick={(e: any) => setType({ ...type, color: e.target.value })}
          />
        ))}
      </div>
    </>
  );
}
