export function CreateCategory() {
  return (
    <>
      <div className=" w-4/5">
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="name">Descrição:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </>
  );
}
