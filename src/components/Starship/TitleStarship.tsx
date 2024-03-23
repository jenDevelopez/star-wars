import { useStarsStore } from "../../store/StarsStore"

export default function TitleStarsip() {
  const {starshipItem} = useStarsStore()
  return (
    <div className="my-5">
      <h1 className='text-4xl text-center dark:text-zinc-500'>
        {starshipItem.name}
      </h1>
    </div>
  )
}
