pts = []
pts[0] = [0, 0, 0]
pts[1] = [10, 0, 0]
pts[2] = [10, 15, 0]
pts[3] = [0, 15, 0] 
@last_ent = Sketchup.active_model.entities.add_group
base = @last_ent.entities.add_face pts
height = 20
height = -height if( base.normal.dot(Z_AXIS) < 0 )
base.pushpull height
