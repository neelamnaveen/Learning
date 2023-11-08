import javax.swing.*;
import java.awt.*;

    public class Home {

    private JPanel panel1;
        private JPanel pane01;
        public static void main(String[] args) {
            JFrame frame = new JFrame("Home");
            frame.setContentPane(new Home().panel1);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.pack();
            frame.setVisible(true);
        }
    }