workflow "New workflow" {
  on = "push"
  resolves = ["George Mburu Kibaru"]
}

action "George Mburu Kibaru" {
  uses = "actions/bin/filter@b2bea07"
  runs = "George Mburu Kibaru"
}
