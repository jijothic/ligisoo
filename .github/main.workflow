workflow "New workflow" {
  on = "push"
  resolves = ["Connect to graphql server"]
}

action "Connect to graphql server" {
  uses = "actions/bin/filter@b2bea07"
  runs = "Droplet server"
}
