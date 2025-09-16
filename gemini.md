
 in each top-level .Owlbot.yaml file under @packages, there is a `source`       │
│   property. However, the source property should only have one slash at the       │
│   beginning of the file, not two. For example                                    │
│   @packages/google-maps-solar/.OwlBot.yaml's source property says                │
│   //google/maps/solar/google-maps-solar-nodejs, instead it should just be        │
│   /google/maps/solar/google-maps-solar-nodejs. can you remove the extra          │
│   slash in all of these .Owlbot.yaml files?          

start after packages/google-cloud-retail/.OwlBot.yaml. You've fixed everything before that already.
