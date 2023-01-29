import { faker } from '@faker-js/faker'

function ComponentOne(props) {
    return (
            <div class="card">
                <div class="content">
                    <img class="right floated mini ui image" src={faker.image.avatar()} alt="alt" />
                    <div class="header">
                        {props.name}
                    </div>
                    <div class="meta">
                        {props.friend}
                    </div>
                    <div class="description">
                        {props.content}
                    </div>
                </div >
            
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
            </div></div>
    )
}



export default ComponentOne;
