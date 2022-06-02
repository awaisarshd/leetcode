public class Program
{
    public static int Main(string s)
    {
        // if its a only char, then return its length.
        if (s.Length == 1) return s.Length;

        var length = 0;
        var subStr = "";

        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i; j < s.Length; j++)
            {
                // if subStr is empty or current index is not sub string,
                if (subStr.Length == 0 || !subStr.Contains(s[j]))
                {
                    subStr += s[j];
                }
                else
                {
                    break;
                }
            }

            if (!string.IsNullOrEmpty(subStr))
            {
                length = subStr.Length > length ? subStr.Length : length;
            }

            subStr = "";
        }

        return length;
    }
}