function bottom_case_extrude_5_2_outline_fn(){
    return new CSG.Path2D([[39,-159.5],[39,-89.5]]).appendArc([40,-88.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([74,-88.5]).appendArc([75,-87.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([75,-80.15]).appendArc([76,-79.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([92,-79.15]).appendArc([93,-78.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([93,-76.75]).appendArc([94,-75.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([114,-75.75]).appendArc([115,-76.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([115,-78.15]).appendArc([116,-79.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([132,-79.15]).appendArc([133,-80.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([133,-80.85]).appendPoint([150,-80.85]).appendArc([151,-81.85],{"radius":1,"clockwise":true,"large":false}).appendPoint([151,-97.85]).appendPoint([173,-97.85]).appendPoint([172.8455742,-181.2956232]).appendPoint([173.0179125,-181.5200288]).appendArc([172.9319149,-182.8362213],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.2456263,-196.5225099]).appendArc([158.0385195,-196.6814285],{"radius":1,"clockwise":true,"large":false}).appendPoint([110.6604952,-169.3277135]).appendArc([110.4281443,-169.2302224],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.1313379,-160.5364835]).appendArc([78.8636888,-160.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([40,-160.5]).appendArc([39,-159.5],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.2] });
}




                function _innerWallBottom_case_fn() {
                    

                // creating part 0 of case _innerWallBottom
                let _innerWallBottom__part_0 = bottom_case_extrude_5_2_outline_fn();

                // make sure that rotations are relative
                let _innerWallBottom__part_0_bounds = _innerWallBottom__part_0.getBounds();
                let _innerWallBottom__part_0_x = _innerWallBottom__part_0_bounds[0].x + (_innerWallBottom__part_0_bounds[1].x - _innerWallBottom__part_0_bounds[0].x) / 2
                let _innerWallBottom__part_0_y = _innerWallBottom__part_0_bounds[0].y + (_innerWallBottom__part_0_bounds[1].y - _innerWallBottom__part_0_bounds[0].y) / 2
                _innerWallBottom__part_0 = translate([-_innerWallBottom__part_0_x, -_innerWallBottom__part_0_y, 0], _innerWallBottom__part_0);
                _innerWallBottom__part_0 = rotate([0,0,0], _innerWallBottom__part_0);
                _innerWallBottom__part_0 = translate([_innerWallBottom__part_0_x, _innerWallBottom__part_0_y, 0], _innerWallBottom__part_0);

                _innerWallBottom__part_0 = translate([0,0,0], _innerWallBottom__part_0);
                let result = _innerWallBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return _innerWallBottom_case_fn();
            }

        