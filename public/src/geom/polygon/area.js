var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

    var points = [
        new Phaser.Geom.Point(220, 450),
        new Phaser.Geom.Point(200, 200),
        new Phaser.Geom.Point(400, 300)
    ];

    var polygon = new Phaser.Geom.Polygon(points);

    var text = this.add.text(400, 50, '');

    this.input.on('pointermove', function (pointer) {

        Phaser.Geom.Point.CopyFrom(pointer, points[points.length - 1]);

        polygon.setTo(points);

        redraw();
    });

    this.input.on('pointerdown', function (pointer) {

        points.push(Phaser.Geom.Point.Clone(points[points.length - 1]));

    });

    redraw();

    function redraw()
    {
        graphics.clear();

        graphics.strokePoints(polygon.points, true);

        text.setText("Polygon Area: " + polygon.area);
    }
}
