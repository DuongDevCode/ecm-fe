export default function PageItems({
  params,
}: {
  params: { actions: string[] }
}) {
  console.log(params)
  return (
    <div className="w-full flex justify-center items-center">
      <h1 className="text-3xl text-sky-600 sans-serif">Hi! Have a nice day</h1>
    </div>
  )
}