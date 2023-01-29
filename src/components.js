import { faker } from '@faker-js/faker'

function ComponentOne(props) {
    return (
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={faker.image.avatar()} alt="alt" />
                    <div className="header">
                        {props.name}
                    </div>
                    <div className="meta">
                        {props.friend}
                    </div>
                    <div className="description">
                        {props.content}
                    </div>
                </div >
            
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div></div>
    )
}



export default ComponentOne;
