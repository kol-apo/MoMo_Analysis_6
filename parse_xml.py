import xml.etree.ElementTree as ET

def parse_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()

    sms_messages = []
    for sms in root.findall('sms'):
        body = sms.find('body').text
        sms_messages.append(body)

    return sms_messages

# Example usage
if __name__ == "__main__":
    file_path = 'sms_data.xml'
    messages = parse_xml(file_path)
    print(messages[:5])  # Print first 5 messages for verification