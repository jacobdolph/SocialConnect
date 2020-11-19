import React from "react";
import { Image, List, Popup } from "semantic-ui-react";
import { IAttendee } from "../../../app/models/activity";

interface IProps {
  attendees: IAttendee[];
}

const styles = {
  borderColor: "orange",
  borderWidth: 3,
  boxShadow: "2px 2px 5px grey",
};

const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
  return (
    <div>
      <List horizontal>
        {attendees.map((attendee) => (
          <List.Item key={attendee.username}>
            <Popup
              header={attendee.username}
              trigger={
                <Image
                  size="mini"
                  circular
                  src={attendee.image || "/assets/user.png"}
                  bordered
                  style={attendee.following ? styles : null}
                />
              }
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default ActivityListItemAttendees;
