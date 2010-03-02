t = Geom::Transformation.rotation @last_ent.bounds.center, [0, 0, 1], rand(360).to_i
Sketchup.active_model.entities.transform_entities t,@last_ent
