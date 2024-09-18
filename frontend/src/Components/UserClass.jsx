import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  render() {
    const { name, age, profession } = this.props;
    const { count1, count2 } = this.state;

    return (
      <div className="bg-white shadow-md rounded-lg mt-4 max-w-3xl mx-auto">
        <div className="flex justify-between p-4">
          <div className="flex flex-col items-start border p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">Left Count: {count1}</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => {
                this.setState({
                  count1: count1 + 1,
                });
              }}
            >
              Click me..
            </button>
            <h3 className="text-lg mt-4">Name: <span className="font-medium">{name}</span></h3>
            <h3 className="text-lg mt-2">Age: <span className="font-medium">{age}</span></h3>
            <h3 className="text-lg mt-2">Profession: <span className="font-medium">{profession}</span></h3>
          </div>
          <div className="flex flex-col items-end border p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">Right Count: {count2}</h1>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => {
                this.setState({
                  count2: count2 + 1,
                });
              }}
            >
              Click me..
            </button>
            <h3 className="text-lg mt-4">Name: <span className="font-medium">{name}</span></h3>
            <h3 className="text-lg mt-2">Age: <span className="font-medium">{age}</span></h3>
            <h3 className="text-lg mt-2">Profession: <span className="font-medium">{profession}</span></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
