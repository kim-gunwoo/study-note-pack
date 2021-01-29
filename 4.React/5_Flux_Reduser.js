/*

하나의 불변한 저장소
액션이 상태변화를 유도
상태변화를 업데이트


REDUX ACTION
{type : RATE_COURSE , rating }

USING ACTION CONSTANTS
export const RATE_COURSE = 'RATE_COURSE';

REDUX ACTION CREATOR
rateCourse(rating){
    return {type: RATE_COURSE, rating}
}

state is read-only
function myReducer(state, action){
    switch (action.type){
        case INCREMENT_COUNTER:
            // return new state based on action passwd
    }
}

( UI )=> triggers => 
( Action)  => sent to =>
( Redux ) => updates =>
( Store ) => contains =>
( State ) => defines => ( UI )


*/

/*
Components




*/

const Component = (props) => <div className={props.name}>{propschildren}</div>;

const Root = (
  <div className="Comment">
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.author.avterUrl}
        alt={props.author.name}
      />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
    <div className="Comment-text"></div>
    <div className="Comment-date">{formatDate(props.date)}</div>
  </div>
);

const Root = (
  <Component name="comment">
    <Component className="user">
      <img
        className="Avatar"
        src={props.author.avterUrl}
        alt={props.author.name}
      />
      <Component className="name">{props.author.name}</Component>
    </Component>
    <Component className="text"></Component>
    <Component className="date">{formatDate(props.date)}</Component>
  </Component>
);
