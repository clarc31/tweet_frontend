import { useSelector } from 'react-redux';

//const dispatch = useDispatch();



function Tweet() {
    const users = useSelector((state) => state.users.value);
    console.log(users)
    return (
      <div>
          <h1>TEST</h1>

      </div>
    );
  }

  export default Tweet;
   