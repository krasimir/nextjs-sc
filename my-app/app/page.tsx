export default function Home() {
  async function onSubmit(data: FormData) {
    'use server';
    console.log('form submitted');
  }
  return (
    <main>
      <form action={onSubmit}>
        <label className="b mb1">
          <span>Date:</span>
          <input type="date" name="date"/> 
        </label>
        <label className="b mb1">
          <span>Place:</span>
          <input type="text" name="place" placeholder="place"/>
        </label>
        <hr />
        <button type="submit">Add</button>
      </form>
    </main>
  )
}
