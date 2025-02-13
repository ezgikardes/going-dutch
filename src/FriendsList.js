import Friend from "./Friend";

export function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  onDeleteFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </ul>
  );
}
