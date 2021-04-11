# fivem-newspaper
Simple resource that allows anyone to create, read, and delete newspapers, which contain one or more articles

## Usage
You should be able to just drop this folder into wherever your resources are, then using the in-game chat: `/newspaper`

If for some reason you need to rebuild the resource, go to the `web` folder and run `(yarn | npm) run build:resources`

### Notes
I would normally put the firebase credentials in an ENV file and/or secure it through the rules in Firebase console but since this is just for testing purposes I left it in. I'm also assuming that not every player would have access to create and delete newspapers, so getting player ids to check if they have permission to do that would probably be something else I'd add.
