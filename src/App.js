const Hello = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by{" "}
      <a href="https://github.com/herdeybayor">herdeybayor</a>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Sherifdeen" age={17} />
      <Hello name={name} age={age} />
      <Hello name="Clerk Kent" age={age + 10} />
      <Footer />
    </>
  );
};

export default App;
